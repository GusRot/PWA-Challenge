export class CheckoutSteps extends PureComponent {

    render() {
        const { stepMap } = this.props;
        const steps = Object.keys(stepMap);
        const newStepMap = steps.map((item) => stepMap[item]);
        
        return (
            <div block="Checkout-steps" aria-label="CheckoutSteps">
                {newStepMap.map((newStep, index) => {
                    const currentStepActive =  true;
                    
                    return (
                        <>
                            <div
                                key={`step${newStep}`}
                                block={
                                    currentStepActive ? "step active" : "step"
                                }
                            />
                            <div
                                key={`current-step${newStep}`}
                                block={
                                    currentStepActive
                                        ? "current-step active"
                                        : "current-step"
                                }
                            >
                                <div block="current-step-container">
                                    <span>{index + 1}</span>
                                </div>
                                <p>{value}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        );
    }
}

export default CheckoutSteps;
