import React from 'react';

function getRandomIntInclusive(min, max) {
  let mi = min;
  let ma = max;
  mi = Math.ceil(mi);
  ma = Math.floor(ma);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi; // Максимум и минимум включаются
}

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      albumId: null,
      id: null,
      title: null,
      url: null,
      thumbnailUrl: null,
    };
  }

  async componentDidMount() {
    const num = getRandomIntInclusive(1, 5000); // Случайная фотография из 5000
    const url = `https://jsonplaceholder.typicode.com/photos/${num}`;
    await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            num,
            ...result,
          });
        },
      );
  }

  render() {
    const { num } = this.state;
    const { albumId } = this.state;
    const { id } = this.state;
    const { title } = this.state;
    const { url } = this.state;
    const { thumbnailUrl } = this.state;
    return (
      <div>
        <b>
          Случайное Фото №
          {num}
        </b>
        <ul>
          <li>
            AlbumId:
            {albumId}
          </li>
          <li>
            Id:
            {id}
          </li>
          <li>
            Title:
            {title}
          </li>
          <li>
            Url:
            {url}
          </li>
          <li>
            ThumbnailUrl:
            {thumbnailUrl}
          </li>
        </ul>
      </div>
    );
  }
}

export default Photo;
