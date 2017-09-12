import React,{Component} from 'react';

export class GoogleMap extends Component {
    componentDidMount(){
        console.log(this.props.lat);
        console.log(this.props.lon);
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center: {
                lat:this.props.lat,
                lng:this.props.lon
            }
        })
    }

    render(){
        return <div ref="map"></div>;
    }
}