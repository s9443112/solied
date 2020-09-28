import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { withStyles } from "@material-ui/core/styles";

import { Container, Grid } from "@material-ui/core"
import DetailItem from './detailItem'
import style from '../../style'
import * as request from '../../request/index'

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
            view3: undefined,
            html: undefined
        }
    }

    search = (nameKey, myArray) => {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i]._id === nameKey) {
                return myArray[i];
            }
        }
    }

    do_something = async (classes) =>{
       
        // console.log(machines_list)


        // let buffer = []
        // let buffer2 = []
        // for (let i in data) {
        //     if (data[i].layout === 2) {
        //         buffer2.push(
        //             <DetailItem
        //                 key={i}
        //                 title={data[i].title}
        //                 target={data[i].target}
        //                 amount={data[i].amount}
        //                 percent={data[i].percent}
        //                 person={data[i].person}
        //                 pretime={data[i].pertime}
        //                 machine={data[i].machine}
        //                 order={data[i].order}
        //                 power={data[i].power}
        //             />
        //         )

        //     } else {
        //         buffer.push(
        //             <DetailItem
        //                 key={i}
        //                 title={data[i].title}
        //                 target={data[i].target}
        //                 amount={data[i].amount}
        //                 percent={data[i].percent}
        //                 person={data[i].person}
        //                 pretime={data[i].pertime}
        //                 machine={data[i].machine}
        //                 order={data[i].order}
        //                 power={data[i].power}
        //             />
        //         )
        //     }

        // }
        // this.setState({ view: buffer, stamping2: buffer2 })
        // buffer = []
        // for (let i in data2) {
        //     buffer.push(
        //         <DetailItem
        //             key={i}
        //             title={data2[i].title}
        //             target={data2[i].target}
        //             amount={data2[i].amount}
        //             percent={data2[i].percent}
        //             person={data2[i].person}
        //             pretime={data2[i].pertime}
        //             machine={data2[i].machine}
        //             order={data2[i].order}
        //         />
        //     )
        // }
        // this.setState({ view2: buffer })
        // buffer = []
        // for (let i in data3) {
        //     buffer.push(
        //         <DetailItem
        //             key={i}
        //             title={data3[i].title}
        //             target={data3[i].target}
        //             amount={data3[i].amount}
        //             percent={data3[i].percent}
        //             person={data3[i].person}
        //             pretime={data3[i].pertime}
        //             machine={data3[i].machine}
        //             order={data3[i].order}
        //         />
        //     )
        // }
        // this.setState({ view3: buffer })

        // console.log("fuck")
        // let info = await request.info()
        // console.log(info)

        let machines = await request.get_machine()
        let machines_status = await request.get_machine_status()
        let machine_power = await request.get_machine_power()
        
        console.log(machines_status)

        console.log(machine_power)

        let machines_list = {}

        for (let i in machines) {
            // console.log(machines[i])
            if (!machines_list.hasOwnProperty(machines[i].type)) {
                // console.log("ok")
                machines_list[machines[i].type] = []
            }
            console.log(machines[i]._id)

            var resultObject = this.search(machines[i]._id, machines_status);
            if (resultObject !== undefined) {
                var cc = this.search(resultObject._id, machine_power);
                console.log(machine_power)
                console.log(resultObject._id)

                if (cc !== undefined) {
                    machines_list[machines[i].type].push({
                        "title": resultObject.name,
                        "layout": resultObject.display_layer,
                        "target": resultObject.dispatch_quantity,
                        "amount": resultObject.count,
                        "person": resultObject.user,
                        "machine": resultObject.product_number,
                        "product_name": resultObject.product_name,
                        "power": cc.status === 'off' ? false : true
                    })
                }else{
                    machines_list[machines[i].type].push({
                        "title": machines[i].name,
                        "layout": machines[i].display_layer,
                        "target": machines[i].dispatch_quantity,
                        "amount": machines[i].count,
                        "person": machines[i].user,
                        "machine": machines[i].product_number,
                        "product_name": machines[i].product_name
                    })
                }
               

            } else {
                machines_list[machines[i].type].push({
                    "title": machines[i].name,
                    "layout": machines[i].display_layer,
                    "target": machines[i].dispatch_quantity,
                    "amount": machines[i].count,
                    "person": machines[i].user,
                    "machine": machines[i].product_number,
                    "product_name": machines[i].product_name
                })

            }






        }
        console.log(machines_list)
        let container = []
        for (let i in Object.keys(machines_list)) {
            // console.log(Object.keys(machines_list)[i])
            let ii = Object.keys(machines_list)[i]
            let grid = []
            let detail = []
            for (let j in machines_list[ii]) {
                // console.log(machines_list[ii][j].title)
                // console.log(j)
                if (!detail.hasOwnProperty(machines_list[ii][j].layout)) {
                    detail[machines_list[ii][j].layout] = []
                }
                // console.log(detail)
                detail[machines_list[ii][j].layout].push(
                    <DetailItem
                        key={j}
                        title={machines_list[ii][j].title}
                        target={machines_list[ii][j].target}
                        amount={machines_list[ii][j].amount}
                        person={machines_list[ii][j].person}
                        machine={machines_list[ii][j].machine}
                        order={machines_list[ii][j].product_name}
                        power={machines_list[ii][j].power}
                    />
                )

            }
            for (let z in detail) {
                if (detail[z].length === 0) {
                    continue
                }
                // console.log(i+z)
                grid.push(
                    <Grid container spacing={3} key={i + z}>
                        {detail[z]}
                    </Grid>
                )
            }
            // console.log(grid)
            // console.log("----------------------")
            container.push(<Container maxWidth="lg" className={classes.container} key={i}>
                {grid}
            </Container>)
        }
        this.setState({
            html: <Carousel interval={15000} indicators={true} autoPlay={true} >{container}</Carousel>
        })

    }

    async componentDidMount() {


        this.props.handleChangeValue(this.props.title)
        const { classes } = this.props;
        this.do_something(classes)
        setInterval((() =>
            this.do_something(classes)
        ), 60000);

    }

    render() {
        const { classes } = this.props;
        // console.log(this.props)


        return (


            <>
                {this.state.html}
                {/* <Container maxWidth="lg" className={classes.container}>
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
                </Container> */}
            </>
        )
    }
}



export default withStyles(style, { withTheme: true })(Dashboard);