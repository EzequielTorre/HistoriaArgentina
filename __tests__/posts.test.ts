import { describe, it, expect } from 'vitest'
import { getAllPosts } from '../lib/posts'

describe('posts', () => {
  it('devuelve al menos un post', () => {
    const posts = getAllPosts()
    expect(Array.isArray(posts)).toBe(true)
    expect(posts.length).toBeGreaterThan(0)
  })
})
