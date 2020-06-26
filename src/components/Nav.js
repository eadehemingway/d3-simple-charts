import React from 'react'
import * as d3 from 'd3'
import { Link } from 'react-router-dom'
import { chartList } from './ChartList'
import styled from 'styled-components'

export class Nav extends React.Component {
  state = {}

  render() {
    return (
      <Container>
        <Link className="nav-link" to="/">
          HOME
        </Link>
        {chartList.map((c) => (
          <Link className="nav-link" to={c.endpoint}>
            {c.name}
          </Link>
        ))}
      </Container>
    )
  }
}

const Container = styled.div`
  padding-bottom: 70px;
  height: 100vh;
  width: 200px;
  min-width: 200px;
  border-right: 2px solid #e5ccc9;
  padding-left: 2rem;
`
