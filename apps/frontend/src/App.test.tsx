import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders hello message', () => {
    render(<App />)
    expect(screen.getByText('Hello Sarah')).toBeInTheDocument()
  })

  it('renders welcome message', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Preloved Corner')).toBeInTheDocument()
  })

  it('renders count button', () => {
    render(<App />)
    expect(screen.getByText('Count is 0')).toBeInTheDocument()
  })
})