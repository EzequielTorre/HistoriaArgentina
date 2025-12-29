import { describe, it, expect } from 'vitest';
import { GET } from '../app/api/posts/route';

describe('API /api/posts', () => {
  it('devuelve un JSON con lista de posts y status 200', async () => {
    const res: any = GET();
    // NextResponse.json devuelve un objeto Response-like con json() y status
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    // extraer body
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('slug');
    expect(body[0]).toHaveProperty('title');
  });
});
