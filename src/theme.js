import PropTypes from 'prop-types';

export const themeDefaults = {
  colors: {
    white: '#FFFFFF',
    grey4: 'green',
    grey5: '#E6E9EB',
    grey6: '#D3DADE',
    grey7: '#A4AFB6',
    grey8: '#77818c',
    grey9: '#67707C',
    grey10: '#585F68',
  },
  halfGutterWidth: '0.5rem',
};

export const themeShape = PropTypes.shape({
  colors: PropTypes.shape({
    white: PropTypes.string.isRequired,
    grey4: PropTypes.string.isRequired,
    grey5: PropTypes.string.isRequired,
    grey6: PropTypes.string.isRequired,
    grey7: PropTypes.string.isRequired,
  }).isRequired,
  halfGutterWidth: PropTypes.string.isRequired,
});
