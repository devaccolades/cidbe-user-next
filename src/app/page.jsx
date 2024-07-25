import React from 'react';
import Cover from './(home)/Cover';
import { getSeoApi } from '../services/services';

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await getSeoApi(path);
    data = res.data.data[0];
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function generateMetadata() {
  const path = '/';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}

function Page() {
  return (
    <div>
      <Cover />
    </div>
  );
}

export default Page;
