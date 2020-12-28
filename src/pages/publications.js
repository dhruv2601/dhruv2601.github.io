import React from 'react';
import { graphql } from 'gatsby';
import { PageLayout, PageTitle, ProjectLink } from '../components';
import { SEO, Utils } from '../utils';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FullPaper = () => (
  <Badge key={'Full paper'} pill variant="secondary" className="px-2 mr-1">
    {'Full paper'}
  </Badge>
);

const Poster = () => (
  <Badge key={'Poster'} pill variant="secondary" className="px-2 mr-1">
    {'Poster'}
  </Badge>
);

const ShortPaper = () => (
  <Badge key={'Short paper'} pill variant="secondary" className="px-2 mr-1">
    {'Short paper'}
  </Badge>
);

const DemoPaper = () => (
  <Badge key={'Demo paper'} pill variant="secondary" className="px-2 mr-1">
    {'Demo paper'}
  </Badge>
);

const Award = ({ name }) => (
  <span className="px-2 mr-1" style={{ fontSize: '90%' }}>
    🏆 <b style={{ color: '#EEBB00' }}>{name}</b>
  </span>
);

const Patent = () => (
  <Badge key={'Patent'} pill variant="secondary" className="px-2 mr-1">
    {'Patent'}
  </Badge>
);

export default ({ data }) => {
  return (
    <PageLayout>
      <SEO title="Publications and Patents" />
      <PageTitle title="Publications and Patents" />
      <Container className="text-left">
        <section>
          <ol reversed={true}>
            <p style={{ textAlign: 'center' }}>2019</p>
            <li>
              <b>Dhruv Rathi</b>{' '}
              <a>PATIENT INTERACTIVE SYSTEM FOR FACIAL PARALYSIS AND METHOD THEREOF</a>
              . <Award /> <Patent />
            </li>

            <p style={{ textAlign: 'center', marginTop: '1rem' }}>2018</p>
            <li>
              <b>Dhruv Rathi</b>, Dr. Rajni Jindal.{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://arxiv.org/pdf/1805.06620.pdf"
              >
                DroidMark – A Tool for Android Malware Detectionusing Taint Analysis and Bayesian Network
              </a>
              . <FullPaper />
            </li>
            <li>
              <b>Dhruv Rathi</b>{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://arxiv.org/pdf/1805.06618"
              >
                Optimization of Transfer Learning for Sign Language Recognition Targeting Mobile Platform
              </a>
              . <FullPaper />
            </li>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>2017</p>
            <li>
              <b>Dhruv Rathi</b>, Sushant Jain, Dr. S. Indu.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://ieeexplore.ieee.org/document/8593044">
                Underwater fish species classification using convolutional neural network and deep learning
              </a>
              . In <em>International Conference on Advances in Pattern Recognition (ICAPR 2017)</em>. <FullPaper />
            </li>
          </ol>
        </section>
      </Container>
    </PageLayout>
  );
};
