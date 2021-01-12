import React, { useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { bindActionCreators } from 'redux';
import { useDispatch, connect } from 'react-redux';
import updateTitle from '../../../redux/actions/index';
import BoilerItem from './BoilerItem';
import {
  getBoilers,
  deleteBoiler,
  addBoiler,
  updateBoiler,
} from '../../../redux/actions/boiler';
import { showModal, closeModal } from '../../../redux/actions/modalAction';

const BoilersSection = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle('Boilers'));
  }, []);

  useEffect(() => {
    props.getBoilers();
  }, [props.getBoilers]);

  if (props.boilers.isloading) {
    return <div>Loading...</div>;
  }

  if (props.boilers.error) {
    return <div>ERROR!!!</div>;
  }

  const handleOpen = () => props.showModal('addBoiler', {});

  return (
    <div>
      <ul className="ulStyle">
        <li className="liStyle-tit">Id</li>
        <li className="liStyle-tit">Type</li>
        <li className="liStyle-tit">Maintainance Rate</li>
        <li className="liStyle-tit">Hour Eventual Cost</li>
        <li className="liStyle-tit">Id Building</li>
        <li className="liStyle-tit">Actions</li>
      </ul>
      {console.log(props.boilers.list)}
      {props.boilers.list.map((boilerIt) => (
        <BoilerItem
          key={boilerIt._id}
          boilerIt={boilerIt}
          deleteBoiler={props.deleteBoiler}
          getBoilers={props.getBoilers}
          updateBoiler={props.updateBoiler}
        />
      ))}
      <div onClick={handleOpen}>
        <AddCircleIcon style={ { color: '#8325FE', width: 60, height: 60 }}/>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBoiler,
  deleteBoiler,
  getBoilers,
  updateBoiler,
  showModal,
  closeModal,
}, dispatch);

const mapStateToProps = (state) => ({
  boilers: state.boilersReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoilersSection);
