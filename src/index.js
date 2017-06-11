const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM());
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl);
    wrapper.removeChild(oldEl);
  };
};

const createDOMFromString = (domString) => {
  const div = document.createElement('div');
  div.innerHTML = domString;
  return div;
}

class Component {

  constructor(props = {}) {
    this.props = props;
  }

  setState(state) {
    const oldEl = this.el;
    this.state = state;
    this.el = this._renderDOM();
    if (this.onStateChange) {
      this.onStateChange(oldEl, this.el);
    }
  }

  _renderDOM() {
    this.el = createDOMFromString(this.render());
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false);
    }
    return this.el;
  }
}

class LikeButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  onClick() {
    this.setState({isLiked: ! this.state.isLiked});
  }

  render() {
    return `
      <button class="like-btn" style="background-color: ${this.props.bgColor}">
        <span class="like-text">${this.state.isLiked ? '取消' : '點讚'}</span>
        <span>👍</span>
      </button>
    `;
  }
}

const wrapper = document.querySelector('.wrapper');
mount(new LikeButton({bgColor: 'red'}), wrapper);
