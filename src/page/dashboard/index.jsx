import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { withStyles } from "@material-ui/core/styles";

import { Container, Grid } from "@material-ui/core"
import DetailItem from './detailItem'
import style from '../../style'


const data = [
    {
        "title": "沖壓(260頓)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 2
    },
    {
        "title": "沖壓(110頓)",
        "target": undefined,
        "amount": undefined,
        "percent": undefined,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 2
    },
    {
        "title": "沖壓(35頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 1
    },
    {
        "title": "沖壓(35頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 1
    },
    {
        "title": "沖壓(80頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 1
    },
    {
        "title": "沖壓(35頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": false,
        "layout": 1
    },
    {
        "title": "沖壓(35頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": true,
        "layout": 1
    },
    {
        "title": "沖壓(80頓)",
        "target": undefined,
        "amount": undefined,
        "percent": 0,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804",
        "power": false,
        "layout": 1
    }
]

const data2 = [
    {
        "title": "高週波-1",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "高週波-2",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "高週波-3",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
]


const data3 = [
    {
        "title": "點焊(01)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(02)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(03)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(04)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(05)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(06)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(07)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(08)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(09)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(10)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(11)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(12)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },
    {
        "title": "點焊(13)",
        "target": 200,
        "amount": 61,
        "percent": 68,
        "person": "Doghow",
        "pretime": 49,
        "machine": "E10-G7-42C-CW-2",
        "order": "ICS(9001)-20200804"
    },

]


class Dashboard extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = {
            view: undefined,
            stamping2: undefined,
            view2: undefined,
            view3: undefined
        }
    }
    componentDidMount() {
        this.props.handleChangeValue(this.props.title)
        let buffer = []
        let buffer2 = []
        for (let i in data) {
            if (data[i].layout === 2) {
                buffer2.push(
                    <DetailItem
                        key={i}
                        title={data[i].title}
                        target={data[i].target}
                        amount={data[i].amount}
                        percent={data[i].percent}
                        person={data[i].person}
                        pretime={data[i].pertime}
                        machine={data[i].machine}
                        order={data[i].order}
                        power={data[i].power}
                    />
                )

            } else {
                buffer.push(
                    <DetailItem
                        key={i}
                        title={data[i].title}
                        target={data[i].target}
                        amount={data[i].amount}
                        percent={data[i].percent}
                        person={data[i].person}
                        pretime={data[i].pertime}
                        machine={data[i].machine}
                        order={data[i].order}
                        power={data[i].power}
                    />
                )
            }

        }
        this.setState({ view: buffer, stamping2: buffer2 })
        buffer = []
        for (let i in data2) {
            buffer.push(
                <DetailItem
                    key={i}
                    title={data2[i].title}
                    target={data2[i].target}
                    amount={data2[i].amount}
                    percent={data2[i].percent}
                    person={data2[i].person}
                    pretime={data2[i].pertime}
                    machine={data2[i].machine}
                    order={data2[i].order}
                />
            )
        }
        this.setState({ view2: buffer })
        buffer = []
        for (let i in data3) {
            buffer.push(
                <DetailItem
                    key={i}
                    title={data3[i].title}
                    target={data3[i].target}
                    amount={data3[i].amount}
                    percent={data3[i].percent}
                    person={data3[i].person}
                    pretime={data3[i].pertime}
                    machine={data3[i].machine}
                    order={data3[i].order}
                />
            )
        }
        this.setState({ view3: buffer })


    }

    render() {
        const { classes } = this.props;
        // console.log(this.props)
       

        return (


            <Carousel interval={3000} indicators={true} autoPlay={true} >
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {this.state.stamping2}
                    </Grid>
                    <Grid container spacing={3}>
                        {this.state.view}
                    </Grid>

                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {this.state.view2}
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {this.state.view3}
                    </Grid>
                </Container>
            </Carousel>
        )
    }
}



export default withStyles(style, { withTheme: true })(Dashboard);