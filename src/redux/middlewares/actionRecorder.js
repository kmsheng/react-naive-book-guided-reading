const actions = {};

const actionRecorder = (store) => (next) => (action) => {
  console.log('actionRecorder called');
  actions[action.type] = true;
  console.log('actions', actions);
  return next(action);
};

export default actionRecorder;
