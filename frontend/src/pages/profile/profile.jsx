import React, { useState } from 'react';
import {
  Container, Header, Logo, ProfileContainer, Section, SectionTitle,
  ProfileImageContainer, ProfileImage, FormGroup, Label, Input, TextArea,
  ExperienceInput, Button, ExperienceList, ExperienceTag
} from './styledProfile';

const Profile = () => {
  const [data, setData] = useState({ profileImage: null, description: '', city: '', phone: '' });
  const [experiences, setExperiences] = useState([]);
  const [newExp, setNewExp] = useState('');

  const handleChange = (field, value) => setData(prev => ({ ...prev, [field]: value }));
  const handlePhone = (value) => handleChange('phone', value.replace(/\D/g, ''));

  const addExp = () => {
    if (newExp.trim() && !experiences.includes(newExp.trim())) {
      setExperiences(prev => [...prev, newExp.trim()]);
      setNewExp('');
    }
  };

  const removeExp = (exp) => setExperiences(prev => prev.filter(e => e !== exp));

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => handleChange('profileImage', e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const isValid = () => data.profileImage && data.description.trim() && data.city.trim() && data.phone.trim() && experiences.length > 0;

  const save = () => {
    if (isValid()) {
      console.log('Salvo:', { ...data, experiences });
      alert('Perfil atualizado!');
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <div className="logo-icon">Bb</div>
          <div className="logo-text">BORABICO</div>
        </Logo>
      </Header>

      <ProfileContainer>
        <Section>
          <SectionTitle>Visualização do Perfil</SectionTitle>
          
          <ProfileImageContainer>
            <ProfileImage>
              {data.profileImage ? <img src={data.profileImage} alt="Perfil" /> : <div className="placeholder">👤</div>}
            </ProfileImage>
            <input type="file" id="img" accept="image/*" style={{ display: 'none' }} onChange={handleImage} />
            <Button outline onClick={() => document.getElementById('img').click()}>Alterar Foto</Button>
          </ProfileImageContainer>

          <FormGroup>
            <Label>Descrição</Label>
            <TextArea
              placeholder="Conte sobre você e seus serviços..."
              value={data.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Informações Pessoais</SectionTitle>
          
          <FormGroup>
            <Label>Cidade</Label>
            <Input placeholder="São Paulo, SP" value={data.city} onChange={(e) => handleChange('city', e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label>Telefone</Label>
            <Input placeholder="(11)99999-9999" value={data.phone} onChange={(e) => handlePhone(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label>Experiências</Label>
            <ExperienceInput>
              <Input
                placeholder="Pintura, Elétrica..."
                value={newExp}
                onChange={(e) => setNewExp(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addExp()}
              />
              <Button small onClick={addExp}>Adicionar</Button>
            </ExperienceInput>
            
            <ExperienceList>
              {experiences.map((exp, i) => (
                <ExperienceTag key={i}>
                  {exp}
                  <button onClick={() => removeExp(exp)}>×</button>
                </ExperienceTag>
              ))}
            </ExperienceList>
          </FormGroup>

          <Button fullWidth disabled={!isValid()} onClick={save}>
            SALVAR PERFIL
          </Button>
        </Section>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;