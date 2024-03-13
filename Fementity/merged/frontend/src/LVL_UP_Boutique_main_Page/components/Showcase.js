import Button from './Button';
import Addtowishlist from './Addtowishlist';
import Addtocart from './Addtocart';
const Showcase = ({ price }) => {
  return (
    <div className="showcase_component">
      <h2
        style={{
          background: '#B97375',
          align: 'center',
          textAlign: 'center',
          width: '90%',
          margin: '5%',
        }}
      >
        PRODUCT NAME
      </h2>
      <div
        style={{
          background: 'black',
          width: '90%',
          height: '300px',
          margin: '5%',
        }}
      ></div>
      <p
        style={{
          background: '#B97375',
          textAlign: 'center',
          width: '90%',
          margin: '5%',
        }}
      >
        <b>PRICE : </b>
        {price}
      </p>
      <div
        style={{
          display: 'flex',
          flex: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Addtocart />
        <Addtowishlist />
      </div>
    </div>
  );
};

export default Showcase;
