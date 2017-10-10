import React from 'react'

class Detail extends React.Component {
    render() {
        return (
        <div>
        <p>head</p>	
            <p>Detail，url参数：{this.props.params.id}</p> 
            <p>footer</p>
            </div>
        )
    }
}

export default Detail