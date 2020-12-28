import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import ThemeContext from '../utils/theme';
import { PageLayout } from '../components';
import { SEO } from '../utils';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata;
  const { dark } = useContext(ThemeContext);
  const windowGlobal = typeof window !== 'undefined' && window;
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-6 mt-4" fluid>
        <Image width="200" height="200" fluid src={`../../icons/smartRathi.jpg`} style={{ borderRadius: '5%' }} />
        {/* {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )} */}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: windowGlobal && window.innerWidth < 800 ? '3rem' : '5rem',
              color: 'black'
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>I am an Artificial Intelligence Master's student at the Department of Knowledge and Engineering, Universiteit Maastricht</i>
          </p>


          <div className="profile-info">
            <div style={{ lineHeight: 1.2 }} className="info">
              <p style={{ marginBottom: 0 }}>
                <span style={{ fontSize: '1.15rem' }}>Master's Student</span>{' '}
                <a href="https://www.maastrichtuniversity.nl/research/department-data-science-and-knowledge-engineering-dke" target="_blank" rel="noopener noreferrer">
                  @ DKE 
                </a>
                .
              </p>
              <p style={{ marginBottom: 0 }}>
                <span style={{ fontSize: '1.15rem' }}>Ex - Software Engineer </span>{' '}
                <a href="http://zomato.com/" target="_blank" rel="noopener noreferrer">
                  @ Zomato
                </a>
                .
              </p>
              <p style={{ marginBottom: 10 }}>
                <span style={{ fontSize: '1.15rem' }}>Ex - Research Intern</span>{' '}
                <a href="http://www.ece.ubc.ca/~mjulia/ReSeSS.html/" target="_blank" rel="noopener noreferrer">
                  @ The University of British Columbia
                </a>
                .
              </p>
              <p style={{ marginBottom: 0 }} className="location-info">
                <b>Gurgaon, India</b>{' '}
                <span role="img" aria-label="From">
                  🇮🇳
                </span>{' '}
                &#10233; <b>Maastricht, Netherlands</b>{' '}
                <span role="img" aria-label="Home">
                  🇳🇱
                </span>
              </p>
            </div>
          </div>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container" style={{ fontSize: '2rem' }}>
          <a
            href="https://scholar.google.co.in/citations?user=855EW28AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fas', 'graduation-cap']}
              className="icons fa-graduation-cap"
              title="Google Scholar"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://github.com/dhruv2601" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className="icons github"
              title="Github"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-rathi-/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className="icons linkedin"
              title="LinkedIn"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://www.researchgate.net/profile/Dhruv_Rathi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'researchgate']}
              className="icons researchgate"
              title="Research Gate"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://twitter.com/dhruv_2601" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="icons twitter"
              title="Twitter"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="mailto:dhruvrathi15@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fas', 'envelope']}
              className="icons mail"
              title="e-mail"
              style={{ fontSize: '3rem' }}
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`;
