interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className='ProgressBar'>
      <div
        role='progressbar'
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={props.progress}
        className='Progress'
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
}
