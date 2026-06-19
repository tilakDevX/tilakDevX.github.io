import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-cyan text-navy font-semibold hover:bg-cyan/90',
  outline: 'border border-cyan text-cyan hover:bg-cyan/10',
  ghost: 'text-text-secondary hover:text-text-primary',
}

export default function Button({ children, href, to, variant = 'primary', className = '', download, ...rest }) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-200 ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...rest}>{children}</Link>
  }

  if (href) {
    if (download) {
      const handleDownload = (e) => {
        e.preventDefault()
        window.open(href, '_blank')
        const a = document.createElement('a')
        a.href = href
        a.download = ''
        a.click()
      }
      return <a href={href} onClick={handleDownload} className={classes} {...rest}>{children}</a>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>{children}</a>
  }

  return <button className={classes} {...rest}>{children}</button>
}
