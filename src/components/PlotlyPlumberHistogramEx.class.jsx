import React from 'react';
import { debounce } from 'lodash';
import Plot from 'react-plotly.js';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from "axios";

class PlotlyPlumberHistogramEx extends React.Component {
    constructor (props) {
        super(props);
        this.windowWidth = props.windowWidth;

        this.onSliderChange = this.onSliderChange.bind(this);
        this.state = {
            rawdata: [
                {
                    y: null,
                    x: null,
                    type: 'bar'
                }
            ]
        };
    }

    static defaultProps = {
        windowWidth: 1024
    }

    async onSliderChange(input) {
        console.log("what?");

        return axios.get(`${import.meta.env.VITE_AMP_BACKEND_API}/__api__/hist-raw`,
            {
                params: {
                    bins: input,
                }
            }
        )
            .then((data) => {
                console.log(data.data);

                this.setState({
                    rawdata: [
                        {
                            y: data.data.map(x => x["counts"]),
                            x: data.data.map(x => x["mids"]),
                            type: 'bar'
                        }
                    ]
                });

                console.log("(Re-)Render to plotly component: ", `
<Plot
    data={"${this.state.rawdata}"}
    layout={{
        title: 'Histogram of waiting times',
        bargap: 0.01,
        autosize: false,
        width: (0.364583 * ${this.windowWidth}),
        height: (0.234375 * ${this.windowWidth}),
        xaxis: {
            title: 'Waiting time to next eruption (in mins)'
        },
        yaxis: {
            title: 'Frequency'
        },
        useResizeHandler: true,
        responsive: true
    }}
/>
`
                );
            });
    }

    render ()  {
        return (
            <>
                <div className="card">
                    <Plot
                        data={this.state.rawdata}
                        layout={{
                            title: 'Histogram of waiting times',
                            bargap: 0.01,
                            autosize: false,
                            width: (0.364583 * this.windowWidth), // + "px",
                            height: (0.234375 * this.windowWidth), // + "px", // (yes, width)
                            xaxis: {
                                title: 'Waiting time to next eruption (in mins)'
                            },
                            yaxis: {
                                title: 'Frequency'
                            },
                            useResizeHandler: true,
                            responsive: true
                        }}
                    />
                    <Slider
                        id={"bins"}
                        onChange={debounce(this.onSliderChange, 100) /* wait 100ms until allowing change event */}
                        min={1}
                        max={50}
                        marks={{
                            1: '1',
                            13: '13',
                            26: '26',
                            38: '38',
                            50: '50'
                        }} toolTipVisibleAlways={true} />
                    <br />
                    <label htmlFor="bins" className="col-form-label">
                        Number of bins
                    </label>

                </div><br /><br /><br />
            </>
        )
    }
}

export default PlotlyPlumberHistogramEx;
