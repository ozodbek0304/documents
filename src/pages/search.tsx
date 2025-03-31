import Layout from '@/components/layout'
import SearchPage from '@/views/home/search-page'
import React from 'react'

type Props = {}

function Search({}: Props) {
  return (
    <Layout>
        <SearchPage/>
    </Layout>
  )
}

export default Search