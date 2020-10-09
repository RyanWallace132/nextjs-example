import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <p>Check Current Bitcoin Rate</p>
            <Prices bpi={props.bpi}/>
<style jsx>{`
    p{
        color: #616160;
        font-size: 25px;
    }

    h1{
        color: #343A40;
    }
`}</style>
        </div>
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data.bpi
    };
}

export default Index