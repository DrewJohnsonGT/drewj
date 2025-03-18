import BundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  transpilePackages: ['next-mdx-remote'], // Should be resolved in future releases https://github.com/vercel/next.js/issues/76395#issuecomment-2721048784
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
