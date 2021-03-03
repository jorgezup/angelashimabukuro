import React from "react";
import Head from "next/head";

import { apiURL, fetchQuery } from "../lib/utils"

import { Container } from '../styles/Home.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Perguntas from '../components/Perguntas'
import Article from '../components/Article'
import Duvidas from '../components/Duvidas'
import Video from '../components/Video'
import Tratamentos from '../components/Tratamentos'
import Sobre from '../components/Sobre'
import Depoimentos from '../components/Depoimentos'

export default function Home({ page, hero, articles, about, treatment, doubts, video, questions, footer, testimony }) {
  const ordered = articles.sort((a, b) => a.id - b.id)
  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <meta name="title" content={page.title} />
        <meta name="description" content={page.description} />

        <meta property="og:type" content={page.type} />
        <meta property="og:url" content={page.url} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:image" content={page.image.url} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={page.url} />
        <meta property="twitter:title" content={page.title} />
        <meta property="twitter:description" content={page.description} />
        <meta property="twitter:image" content={page.image.url} />
      </Head>
      <Header header={hero} />
      <Container>
        <main>
          <Perguntas questions={questions} />
          {ordered.map(article => {
            return (
              <Article article={article} key={article.id} />
            )
          })
          }
          <Duvidas doubts={doubts} />
          <Video video={video} />
          <Tratamentos treatment={treatment} />
          <Sobre about={about} />
          <Depoimentos testimony={testimony} />
        </main>
      </Container>
      <Footer footer={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const page = await fetchQuery('page')
  const hero = await fetchQuery('hero')
  const questions = await fetchQuery('questions')
  const articles = await fetchQuery('articles')
  const doubts = await fetchQuery('duvidas')
  const video = await fetchQuery('video')
  const treatment = await fetchQuery('tratamentos')
  const about = await fetchQuery('sobre')
  const testimony = await fetchQuery('depoimentos')
  const footer = await fetchQuery('footer')


  return {
    props: {
      page,
      hero,
      questions,
      articles,
      doubts,
      video,
      treatment,
      about,
      testimony,
      footer
    }
  }
}
