export class CheckoutSteps extends PureComponent {

    formatStepText(step) {
        return step.toLowerCase().replace("_step", "").trim();
    }

    formatStepValue(step) {
        return step.toLowerCase().replace("step", "").trim();
    }

    render() {
        const { stepMap, step } = this.props;
        const steps = Object.keys(stepMap);
        const newStepMap = steps.map((item) => stepMap[item]);
        const stepValue = this.formatStepText(step);
        
        return (
            <div block="Checkout-steps" aria-label="CheckoutSteps">
                {newStepMap.map((newStep, index) => {
                    const value = this.formatStepValue(newStep.title.value);
                    const currentStepIndex = newStepMap.map((item,index) => this.formatStepValue(item.title.value) === stepValue ? index : null).filter(value => value !== null)
                    const currentStepActive = currentStepIndex.length ? index <= currentStepIndex[0] : true;
                    const lastStepActive = currentStepIndex.length ? index < currentStepIndex[0] : true;
                    
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
                                    {lastStepActive ? 
                                    <span block="last-step">✓</span> :
                                    <span>{index + 1}</span>}
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
