function FormRow({ name, labelText, handleChange, type, value }) {
    return (
        <div className="form-row">
            {/* Name input */}
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                className="form-input"
            />
        </div>
    )
}

export default FormRow;