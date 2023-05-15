import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//TODO add all the extra stuff that i need on this site and make the bottom look much prettier
export default function Footer() {
  const [personalSite, setPersonalSite] = useState();

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
              repository(name: "des-personal-site") {
                id
                url
                stargazerCount
                updatedAt
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.viewer.repository);
        setPersonalSite(response.data.viewer.repository);
      });
  }, []);

  const renderFooter = () => {
    return (
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-1">
        <div className="flex flex-col items-center md:w-1/2">
          <div>
            <a href="mailto:youremail@example.com">Contact Me</a> | <a href="/resume.pdf" download>Download Resume</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/yourusername/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/yourusername"><i className="fab fa-twitter"></i></a>
          </div>
          <div>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Your Name</p>
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <a
            className="text-blue-500 no-underline hover:text-[var(--standard-color)]"
            href={personalSite.url}
          >
            <p className="text-center">
              Designed & Built By Desmond Gilmour
              <br />
              Wesbite Last Update: {personalSite.updatedAt.slice(0,10)}
              <br />
              <i className="fa-regular fa-star"></i> {personalSite.stargazerCount}
            </p>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="h-24 text-center">
      {personalSite ? renderFooter() : <p>Loading...</p>}
    </div>
  );
}
