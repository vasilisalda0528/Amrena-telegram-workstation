import vase from '../../assets/images/Homepage/vase.png'

const Shuffling = () => {
  const position = [
    { x: 90, y: 70 ,comp:<img src={vase} className="vase-img-small" key='1'/>},
    { x: 120, y: 70,comp:<img src={vase} className="vase-img-small" key='2'/> },
    { x: 150, y: 70,comp:<img src={vase} className="vase-img-small" key='3'/> }
  ];
  return (
    <div className="vase">
      {position.map(comp => {
        console.log(comp.comp)
        return {...comp.comp,props:{...comp.comp.props,className:'vase-img-small'}}
      })}
    </div>
  );
};

export default Shuffling;
