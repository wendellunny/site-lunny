import MyPhoto from '../../../src/img/my-photo.jpg'

export function MyInfo (){
    return (
        <div>
            <div>
                <img src={MyPhoto.src} />
            </div>
        </div>
    )
}