import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function Header() {
  const [downloadableResume, setDownloadableResume] = useState();

  const baseUrl = "https://api.github.com/graphql";

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client.query({
        query: gql`
        {
          viewer {
            login
          }
          repository(name: "resume", owner: "dessygil") {
            id
            releases(first: 1) {
              edges {
                node {
                  id
                  releaseAssets(first: 1) {
                    edges {
                      node {
                        downloadUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `,
      })
      .then((response) => {
        setDownloadableResume(response.data.repository.releases.edges[0].node.releaseAssets.edges[0].node.downloadUrl);
      });
  }, []);

  return (
    <div className="w-full h-32 bg-white top-0 flex items-center font-roboto sticky z-10">
      <a className="text-blue-700 hover:text-blue-700" href="/">
        <h2 className="border-2 border-black mt-6 ml-6 py-2 px-4 rounded-full text-black transition-colors duration-1000 ease-in-out hover:bg-blue-700">DG</h2>
      </a>
      <div className="flex-1">
        <ul className="flex justify-end items-center mt-12 pr-10 space-x-10 list-none">
          <li>
            <a className="text-black hover:text-blue-700" href="#About-anchor">
              01. About
            </a>
          </li>
          <li>
            <a className="text-black hover:text-blue-700" href="#Experience-anchor">
              02. Experience
            </a>
          </li>
          <li>
            <a className="text-black hover:text-blue-700" href="#Portfolio-anchor">
              03. Portfolio
            </a>
          </li>
          <li>
            <a className="text-black hover:text-blue-700" href="#Blog-anchor">
              04. Blog
            </a>
          </li>
          <li className="mr-10 text-lg font-medium py-2">
            <button className="focus:outline-none">
              <a
                className="text-black hover:text-black"
                href={downloadableResume}
                download="DesmondGilmourResume.pdf"
                role="to-download-pdf"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
