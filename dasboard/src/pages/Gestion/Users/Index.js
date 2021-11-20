import React from 'react';
import Layout from '../../Layout'
import CardHeader from '../../../components/Tables/CardHeader';
import TableContainer from '../../../components/Tables/TableContainer';
import Wraptable from '../../../components/Tables/WrapTable';
import SimpleTable from '../../../components/Tables/SimpleTable';
import TablePaginationButtons from '../../../components/Tables/TablePaginationButtons';

const UsersComponent = () => {

    const columns = [
        {
            label: 'Nombre',
            body: 'name',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7',
            customRender: (valor) => (
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/logo-asana.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">{valor}</h6>
                    </div>
                </div>
            )
        },
        {
            label: 'Usuario',
            body: 'user',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'
        },
        {
            label: 'Departamento',
            body: 'dpto',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'
        },
        {
            label: 'Email',
            body: 'email',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2'
        },
        {
            label: '',
            body: 'id',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2',
            customRender: (valor) => <h3>{valor}</h3>
            
        }
    ]
    const data = [
        { id: 1, name: 'alex',  user: 'test', dpto: 'test', nolabel: 'test' },
        { id: 2, name: 'alex2', user: 'test', dpto: 'test', nolabel: 'test' },
        { id: 3, name: 'alex3', user: 'test', dpto: 'test', nolabel: 'test' },
        { id: 4, name: 'alex4', user: 'test', dpto: 'test', nolabel: 'test' },
    ]
    return (
        <Layout>
            <Wraptable>
                <CardHeader nameTable={'DGDevelopers > Table > Users'} searchable={true} />
                <TableContainer>
                    <SimpleTable columns={columns} data={data} />
                </TableContainer>
            </Wraptable>
                <TablePaginationButtons/>
        </Layout>
    );
}

export default UsersComponent;
