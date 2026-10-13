# CIDBI project URL migration: Nginx 301 redirects

## Objective

All project detail pages now use one permanent, status-independent URL:

```text
https://cidbi.com/projects/<slug>
```

The old category-based detail URLs must redirect directly to the canonical URL:

```text
/ongoing-projects/<slug>                -> /projects/<slug>
/completed-projects/<slug>              -> /projects/<slug>
/upcoming-projects/<slug>               -> /projects/<slug>
/featured-projects/<slug>               -> /projects/<slug>
/ready-to-occupy-flats-thrissur/<slug>  -> /projects/<slug>
```

Category listing pages such as `/ongoing-projects` and `/completed-projects`
must continue to work normally. Only URLs containing a project slug are
redirected.

## Nginx configuration

Add this rule inside the HTTPS `server` block for `cidbi.com`, before the
existing `location /` proxy block:

```nginx
# Permanent migration of legacy project-detail URLs.
# The optional trailing slash and query string are preserved correctly.
location ~ ^/(?:ongoing-projects|completed-projects|upcoming-projects|featured-projects|ready-to-occupy-flats-thrissur)/([^/]+)/?$ {
    return 301 /projects/$1$is_args$args;
}
```

Example server context:

```nginx
server {
    listen 443 ssl http2;
    server_name cidbi.com www.cidbi.com;

    # Existing SSL configuration remains here.

    location ~ ^/(?:ongoing-projects|completed-projects|upcoming-projects|featured-projects|ready-to-occupy-flats-thrissur)/([^/]+)/?$ {
        return 301 /projects/$1$is_args$args;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        # Existing proxy headers remain here.
    }
}
```

Do not redirect the category listing pages themselves. They remain useful
landing pages and should continue to return `200`:

```text
/ongoing-projects
/completed-projects
/upcoming-projects
/featured-projects
/ready-to-occupy-flats-thrissur
```

## Safe deployment procedure

First identify the active configuration file:

```bash
sudo nginx -T | grep -nE 'server_name .*cidbi\.com'
```

Back up that file before editing. Replace the example path below with the
actual file reported by the server:

```bash
sudo cp /etc/nginx/sites-available/cidbi /etc/nginx/sites-available/cidbi.backup-$(date +%Y%m%d-%H%M%S)
```

After adding the redirect rule, validate the complete Nginx configuration:

```bash
sudo nginx -t
```

Reload only if the validation succeeds:

```bash
sudo systemctl reload nginx
```

A reload is graceful and should not interrupt active requests.

## Verification

Test every legacy URL family:

```bash
curl -I https://cidbi.com/ongoing-projects/premium-flats-cassia
curl -I https://cidbi.com/completed-projects/clarion
curl -I https://cidbi.com/upcoming-projects/example-project
curl -I https://cidbi.com/featured-projects/premium-flats-cassia
curl -I https://cidbi.com/ready-to-occupy-flats-thrissur/example-project
```

Each response should contain:

```text
HTTP/1.1 301 Moved Permanently
Location: https://cidbi.com/projects/<same-slug>
```

Verify that query parameters survive the redirect:

```bash
curl -I 'https://cidbi.com/ongoing-projects/premium-flats-cassia?utm_source=test'
```

Expected location:

```text
/projects/premium-flats-cassia?utm_source=test
```

Verify that listing pages are not redirected:

```bash
curl -I https://cidbi.com/ongoing-projects
curl -I https://cidbi.com/completed-projects
```

Verify the canonical project page separately:

```bash
curl -I https://cidbi.com/projects/premium-flats-cassia
```

It should return `200 OK`. Also confirm that the page source contains:

```html
<link rel="canonical" href="https://cidbi.com/projects/premium-flats-cassia">
```

## Redirect behavior and application fallback

The Next.js application also contains permanent redirects for the same legacy
paths. Nginx handles production requests first and returns `301`; the Next.js
rules remain a useful fallback if traffic reaches the application directly or
the Nginx rule is temporarily unavailable.

This produces a single redirect hop:

```text
legacy URL --301 from Nginx--> canonical /projects/<slug> URL
```

There is no need to restart PM2 or Gunicorn after an Nginx-only configuration
change.

## Rollback

If validation or production checks fail:

1. Restore the timestamped Nginx configuration backup.
2. Run `sudo nginx -t`.
3. Run `sudo systemctl reload nginx` only after validation succeeds.

The Next.js redirects will continue to provide a fallback during rollback.

