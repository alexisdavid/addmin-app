import React from 'react';

const Tablebody = () => {
    return (
        <tbody>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/logo-asana.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Asana</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$2,500</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">working</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">60%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/github.svg" className="avatar avatar-sm rounded-circle me-2" alt="invision" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Github</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$5,000</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">done</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">100%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm rounded-circle me-2" alt="jira" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Atlassian</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$3,400</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">canceled</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">30%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{ width: '30%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/bootstrap.svg" className="avatar avatar-sm rounded-circle me-2" alt="webdev" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Bootstrap</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$14,000</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">working</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">80%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm rounded-circle me-2" alt="slack" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Slack</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$1,000</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">canceled</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">0%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td>
                <div className="d-flex px-2">
                    <div>
                        <img src="../assets/img/small-logos/devto.svg" className="avatar avatar-sm rounded-circle me-2" alt="xd" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">Devto</h6>
                    </div>
                </div>
            </td>
            <td>
                <p className="text-sm font-weight-bold mb-0">$2,300</p>
            </td>
            <td>
                <span className="text-xs font-weight-bold">done</span>
            </td>
            <td className="align-middle text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-xs font-weight-bold">100%</span>
                    <div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </td>
            <td className="align-middle">
                <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-ellipsis-v text-xs"></i>
                </button>
            </td>
        </tr>
    </tbody>

    );
}

export default Tablebody;
