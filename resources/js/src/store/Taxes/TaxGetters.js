export default {
    findEmployee: state => id => {
        var index = _.findIndex(state.employees, (o) => { return o.id === id })
        return state.employees[index];
    },
    supervisor: state => {
        return state.tax.supervisor;
    },
    getParameter: state => (param, paramType = 'index') => {
        if (paramType == 'index') {
            return state.parameters[param];
        } else {
            var index = _.findIndex(state.parameters, (o) => { return o.id === param })
            return state.parameters[index];
        }
    }
}
