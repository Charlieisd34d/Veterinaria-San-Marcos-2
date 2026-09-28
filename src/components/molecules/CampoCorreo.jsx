export const CampoCorreo = () => {
  return (
    <div className="form-group">
      <label htmlFor="correo">Correo electrónico</label>
      <input 
        type="email" 
        id="correo" 
        name="correo" 
        required 
      />
    </div>
  );
};