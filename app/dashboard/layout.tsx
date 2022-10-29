export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <div style={{display: 'flex'}}>
        <div>MENU</div>
        {children}
      </div>
    )
  }