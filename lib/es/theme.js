import PropTypes from 'prop-types';
export var themeDefaults = {
  colors: {
    white: '#FFFFFF',
    grey4: 'green',
    grey5: '#E6E9EB',
    grey6: '#D3DADE',
    grey7: '#A4AFB6',
    grey8: '#77818c',
    grey9: '#67707C',
    grey10: '#585F68'
  },
  halfGutterWidth: '0.5rem'
};
export var themeShape = PropTypes.shape({
  colors: PropTypes.shape({
    white: PropTypes.string.isRequired,
    grey4: PropTypes.string.isRequired,
    grey5: PropTypes.string.isRequired,
    grey6: PropTypes.string.isRequired,
    grey7: PropTypes.string.isRequired
  }).isRequired,
  halfGutterWidth: PropTypes.string.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJ0aGVtZURlZmF1bHRzIiwiY29sb3JzIiwid2hpdGUiLCJncmV5NCIsImdyZXk1IiwiZ3JleTYiLCJncmV5NyIsImdyZXk4IiwiZ3JleTkiLCJncmV5MTAiLCJoYWxmR3V0dGVyV2lkdGgiLCJ0aGVtZVNoYXBlIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCO0FBRUEsT0FBTyxJQUFNQyxhQUFhLEdBQUc7QUFDM0JDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxLQUFLLEVBQUUsU0FERDtBQUVOQyxJQUFBQSxLQUFLLEVBQUUsT0FGRDtBQUdOQyxJQUFBQSxLQUFLLEVBQUUsU0FIRDtBQUlOQyxJQUFBQSxLQUFLLEVBQUUsU0FKRDtBQUtOQyxJQUFBQSxLQUFLLEVBQUUsU0FMRDtBQU1OQyxJQUFBQSxLQUFLLEVBQUUsU0FORDtBQU9OQyxJQUFBQSxLQUFLLEVBQUUsU0FQRDtBQVFOQyxJQUFBQSxNQUFNLEVBQUU7QUFSRixHQURtQjtBQVczQkMsRUFBQUEsZUFBZSxFQUFFO0FBWFUsQ0FBdEI7QUFjUCxPQUFPLElBQU1DLFVBQVUsR0FBR1osU0FBUyxDQUFDYSxLQUFWLENBQWdCO0FBQ3hDWCxFQUFBQSxNQUFNLEVBQUVGLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQjtBQUN0QlYsSUFBQUEsS0FBSyxFQUFFSCxTQUFTLENBQUNjLE1BQVYsQ0FBaUJDLFVBREY7QUFFdEJYLElBQUFBLEtBQUssRUFBRUosU0FBUyxDQUFDYyxNQUFWLENBQWlCQyxVQUZGO0FBR3RCVixJQUFBQSxLQUFLLEVBQUVMLFNBQVMsQ0FBQ2MsTUFBVixDQUFpQkMsVUFIRjtBQUl0QlQsSUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNjLE1BQVYsQ0FBaUJDLFVBSkY7QUFLdEJSLElBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDYyxNQUFWLENBQWlCQztBQUxGLEdBQWhCLEVBTUxBLFVBUHFDO0FBUXhDSixFQUFBQSxlQUFlLEVBQUVYLFNBQVMsQ0FBQ2MsTUFBVixDQUFpQkM7QUFSTSxDQUFoQixDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZURlZmF1bHRzID0ge1xuICBjb2xvcnM6IHtcbiAgICB3aGl0ZTogJyNGRkZGRkYnLFxuICAgIGdyZXk0OiAnZ3JlZW4nLFxuICAgIGdyZXk1OiAnI0U2RTlFQicsXG4gICAgZ3JleTY6ICcjRDNEQURFJyxcbiAgICBncmV5NzogJyNBNEFGQjYnLFxuICAgIGdyZXk4OiAnIzc3ODE4YycsXG4gICAgZ3JleTk6ICcjNjc3MDdDJyxcbiAgICBncmV5MTA6ICcjNTg1RjY4JyxcbiAgfSxcbiAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgY29sb3JzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHdoaXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3JleTQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBncmV5NTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGdyZXk2OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ3JleTc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgaGFsZkd1dHRlcldpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcbiJdfQ==