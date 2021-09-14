import useAuth from '../hooks/useAuth';

export default function Home() {
  const { user, signin } = useAuth();
  console.log('USER', user);

  return (
    <div>
      <h2>Aprenda programação direto ao ponto 100% free.</h2>
      <button type="button" onClick={() => signin()}>
        Entrar com github
      </button>
    </div>
  );
}
