import React from 'react';
import baby from '../../../images/baby.png';

const ExceptionalDental = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="row w-75 mt-5">
                <div className="col-md-6">
                    <img src={baby} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="mt-5 heading-color">Exceptional Dental <br/> Care, on Your Terms</h2>
                    <p className='text-secondary mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores officiis, inventore illo eum autem distinctio nostrum dignissimos deleniti id at quasi possimus ipsa sequi impedit delectus dolore enim. Itaque eius unde consequatur vitae, suscipit esse iure debitis. Ducimus error atque laboriosam magni. Quidem, accusantium cupiditate? Itaque cupiditate ipsum nesciunt repellendus, blanditiis maxime doloremque voluptatem inventore in tenetur eveniet corporis praesentium possimus asperiores quos impedit sapiente eius non quidem expedita?</p>
                    <div className="mt-5 mb-2">
                        <button className="button-gradient">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalDental;