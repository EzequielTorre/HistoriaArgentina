import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

const mockPosts = [
  {
    slug: 'a',
    title: 'Independencia',
    date: '1816-07-09',
    tags: ['independencia'],
    summary: 'Hecho importante',
  },
  { slug: 'b', title: 'Peronismo', date: '1946-06-04', tags: ['peronismo'], summary: 'Movimiento' },
];

describe('Search component', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ json: () => Promise.resolve(mockPosts) })),
    );
  });

  it('muestra resultados al buscar por título o etiqueta', async () => {
    render(<Search />);

    // wait for fetch to populate posts
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const input = screen.getByPlaceholderText(/Buscar por título, resumen o etiqueta/i);
    await userEvent.type(input, 'Indepen');

    await waitFor(() => {
      expect(screen.getByRole('link', { name: /Independencia/i })).toBeInTheDocument();
    });

    // search by tag
    await userEvent.clear(input);
    await userEvent.type(input, 'peronismo');

    await waitFor(() => {
      expect(screen.getByRole('link', { name: /Peronismo/i })).toBeInTheDocument();
    });
  });
});
