import React from 'react';

function getRandomIntInclusive(min, max) {
  let mi = min;
  let ma = max;
  mi = Math.ceil(mi);
  ma = Math.floor(ma);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi; // Максимум и минимум включаются
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: {
          lat: null,
          lng: null,
        },
      },
      phone: null,
      website: null,
      company: {
        name: null,
        catchPhrase: null,
        bs: null,
      },
    };
  }

  async componentDidMount() {
    const num = getRandomIntInclusive(1, 10); // Случайный пользователь из 10
    const url = `https://jsonplaceholder.typicode.com/users/${num}`;
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
    const { id } = this.state;
    const { name } = this.state;
    const { username } = this.state;
    const { email } = this.state;
    const { address } = this.state;
    const { street } = address;
    const { suite } = address;
    const { city } = address;
    const { zipcode } = address;
    const { geo } = address;
    const { lat } = geo;
    const { lng } = geo;
    const { phone } = this.state;
    const { website } = this.state;
    const { company } = this.state;
    const { catchPhrase } = company;
    const { bs } = company;


    return (
      <div>
        <b>
          Случайный пользователь №
          {num}
        </b>
        <ul>
          <li>
            Id:
            {id}
          </li>
          <li>
            Name:
            {name}
          </li>
          <li>
            Username:
            {username}
          </li>
          <li>
            Email:
            {email}
          </li>
          <li>
            Address:
            <ul>
              <li>
                Street:
                {street}
              </li>
              <li>
                Suite:
                {suite}
              </li>
              <li>
                City:
                {city}
              </li>
              <li>
                Zipcode:
                {zipcode}
              </li>
              <li>
                Geo:
                <ul>
                  <li>
                    Latitude:
                    {lat}
                  </li>
                  <li>
                    Longitude:
                    {lng}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Phone:
            {phone}
          </li>
          <li>
            Website:
            {website}
          </li>
          <li>
            Company:
            <ul>
              <li>
                Name:
                {/* eslint-disable-next-line react/destructuring-assignment */}
                {this.state.company.name}
              </li>
              <li>
                CatchPhrase:
                {catchPhrase}
              </li>
              <li>
                Bs:
                {bs}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default User;
