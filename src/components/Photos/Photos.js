import React from 'react'
import './Photos.css';

class Photos extends React.Component{
    state = {
        countPhoto: 0
    }
    renderPhotos() {
        let photosTemplate = null;
        const {data} = this.props;
        if(data !== null) {
            photosTemplate = data.map((e, i) => {
                if(e.img !== null) {
                    if(e.img.indexOf('prntscr')+1) {
                        const newstr = 'https://image.prntscr.com/' + e.img.substring(25,31) + '/' +e.img.substring(32);
                        return <img src={newstr} alt="" key={i}/>
                    }
                    return <img src={e.img} alt="" key={i}/>
                }
                return undefined;
            })
        }
        if(photosTemplate){
            return photosTemplate;
        }
        else
            return <p>Фоток нету :)</p>
    }
    getCountPhoto() {
        let smth = this.renderPhotos();
        if(smth.length){
            smth = smth.filter(e => e !== undefined )
            return smth.length
        }
    }
    render(){
        return (
            <div>
                <p>Всего найдено фото: {this.getCountPhoto()}</p>
                {this.renderPhotos()}
            </div>
        )
    }
}

export default Photos;