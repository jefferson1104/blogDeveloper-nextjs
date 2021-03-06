const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`
  {
    allTechnologies(orderBy: defaultVisible_DESC) {
      id
      name
      defaultVisible
      logo {
        url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
      }
    }
  }
  `);

  return data.allTechnologies;
}

export async function getAllSeries() {
  const data = await fetchCmsAPI(`
  {
    allSeries (
      orderBy: createdAt_DESC
    ) {
      id
      name
      slug
      description
      seriesType
      thumbUrl {
        id
        url
      }
      seasons {
        id
      }
    }
  }  
  `);

  return data.allSeries;
}

export async function getAllFullSeries() {
  const data = await fetchCmsAPI(`
  {
    allSeries (
      orderBy: createdAt_DESC
    ) {
      id
      name
      slug
      description
      updatedAt
      thumbUrl {
        url
      }
      features {
        name
      }
      seasons {
        id
        slug
        name
        description
        episodes {
          id
          slug
          name
          description
          videoUrl
          author {
            id
          }
          videoTime
          thumbUrl {
            id
          }
        }
      }
    }
  }
`);

  return data.allSeries;
}

export async function getAllEpisodes(idSeason) {
  const data = await fetchCmsAPI(`
  {
    allEpisodes(
      orderBy: createdAt_ASC
      filter: {season: {eq: ${idSeason}}}
    ) {
      id
      name
      description
      slug
      videoUrl
      videoTime
      createdAt
      author {
        name
      }
    }
  }
`);

  return data.allEpisodes;
}

export default {
  getAllTechnologies,
  getAllSeries,
  getAllFullSeries,
  getAllEpisodes,
};
