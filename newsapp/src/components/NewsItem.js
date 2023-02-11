import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
      let  { title, description,imageUrl,newsUrl } = this.props;
    return (
        <div>
            <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl?imageUrl:"https://images.cnbctv18.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-11-at-10.31.49-1019x573.jpeg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title } . . .</h5>
                    <p className="card-text">{description} . . .</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
                </div>
            
      </div>
    )
  }
}

export default NewsItem
