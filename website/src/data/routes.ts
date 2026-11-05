import type { Lang } from './types';

export const langPaths = () => [
  { params: { lang: undefined }, props: { lang: 'en' as Lang } },
  { params: { lang: 'mr' }, props: { lang: 'mr' as Lang } },
];

/** Cross product of languages with a list of extra params and props. */
export function withLangs<P extends Record<string, string>, X extends object>(rows: { params: P; props: X }[]) {
  return rows.flatMap((row) => [
    { params: { lang: undefined, ...row.params }, props: { lang: 'en' as Lang, ...row.props } },
    { params: { lang: 'mr', ...row.params }, props: { lang: 'mr' as Lang, ...row.props } },
  ]);
}
