import BundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  viewTransition: true,
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
