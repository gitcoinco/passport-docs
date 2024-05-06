const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
}
)

module.exports = withNextra({
    redirects: () => [
        {
            source: '/get-started/creating-your-passport',
            destination: 'https://support.passport.xyz/passport-knowledge-base/creating-a-gitcoin-passport',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/creating-your-passport',
            destination: 'https://support.passport.xyz/passport-knowledge-base/creating-a-gitcoin-passport',
            permanent: true,
            basePath: false
        },
        {
            source: '/get-started/collecting-stamps',
            destination: 'https://support.passport.xyz/passport-knowledge-base/gitcoin-passport/what-are-stamps',
            permanent: true,
            basePath: false
        },
        {
            source: '/get-started/presenting-your-passport',
            destination: 'https://support.passport.xyz/passport-knowledge-base/gitcoin-passport/presenting-your-passport',
            permanent: true,
            basePath: false
        },
        {
            source: '/get-started/faq',
            destination: 'https://support.passport.xyz/passport-knowledge-base/gitcoin-passport/common-questions',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/introducing-gitcoin-passport',
            destination: 'https://docs.passport.xyz/',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/readme',
            destination: 'https://docs.passport.xyz/',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/presenting-your-passport',
            destination: 'https://docs.passport.xyz/',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/overview',
            destination: 'https://docs.passport.xyz/overview/why-gitcoin-passport',
            permanent: true,
            basePath: false
        },
        {
            source: '/overview/when-to-use-gitcoin-passport',
            destination: 'https://docs.passport.xyz/overview/use-cases',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/major-concepts',
            destination: 'https://docs.passport.xyz/overview/key-terms',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/how-it-works',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/get-started/how-it-works',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/scorer-api',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/scorer-api/api-access',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/getting-access',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/quick-start',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/quick-start-guide',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides/gating-access-with-passport-scores',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/gating-access-with-passport-scores',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides/integrating-stamps-and-scorers',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/integrating-stamps-and-scorers',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides/working-with-stamp-metadata',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/working-with-stamp-metadata',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides/requiring-a-passport-score-for-airdrop-claim',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/requiring-a-passport-score-for-airdrop-claim',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/integration-guides/integrating-onchain-stamp-data',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/integrating-onchain-stamp-data',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/integrating-onchain-stamp-data',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/integrating-onchain-stamp-data',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/scorer-api/status-and-error-codes',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/status-and-error-codes',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/scorer-api/reading-passport-stamps',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/data-dictionary',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/scorer-api/endpoint-definition',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/api-reference',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/passport-sdk-deprecated',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/passport-sdk-deprecated/getting-started',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/passport-sdk-deprecated/integrating-passport-in-your-dapp',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/case-studies/bankless-academy',
            destination: 'https://docs.passport.xyz/use-cases',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport',
            destination: 'https://docs.passport.xyz/building-with-passport/introduction',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/getting-access',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/getting-access',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/quick-start-guide',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/quick-start-guide',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/api-reference',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/api-reference',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/major-concepts/data-dictionary',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/data-dictionary',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/data-dictionary',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/data-dictionary',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/major-concepts/status-and-error-codes',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/status-and-error-codes',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/major-concepts/onchain-passports',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/overview',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/contract-reference',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/contract-reference',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/attestation-schema',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/attestation-schema',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/major-concepts/platform-integrator-concepts',
            destination: 'https://docs.passport.xyz/building-with-passport/major-concepts/educating-users',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/client-side-scoring',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/client-side-scoring',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/gating-access-with-passport-scores',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/gating-access-with-passport-scores',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/integrating-stamps-and-scores',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/integrating-stamps-and-scores',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/requiring-a-passport-score-for-airdrop-claim',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/requiring-a-passport-score-for-airdrop-claim',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/working-with-stamp-metadata',
            destination: 'https://docs.passport.xyz/building-with-passport/passport-api/tutorials/working-with-stamp-metadata',
            permanent: true,
            basePath: false
        },
        {
            source: '/building-with-passport/tutorials/integrating-onchain-stamp-data',
            destination: 'https://docs.passport.xyz/building-with-passport/smart-contracts/integrating-onchain-stamp-data',
            permanent: true,
            basePath: false
        },
        {
            source: '/:path*',
            destination: 'https://docs.passport.xyz/:path*',
            permanent: true,
        }    
    ]
})