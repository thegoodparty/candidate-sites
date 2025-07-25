'use client'

import { WebsiteTheme } from '../types/website.type'

interface WebsiteFooterProps {
  activeTheme: WebsiteTheme
  onPrivacyPolicyClick: () => void
  committee: string
}

export default function WebsiteFooter({
  activeTheme,
  onPrivacyPolicyClick,
  committee = '',
}: WebsiteFooterProps) {
  return (
    <footer className={`py-6 px-4 border-t ${activeTheme.border}`}>
      <div className="container mx-auto text-center">
        <p className="text-base mb-4">Paid for and authorized by {committee}</p>
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} • All Rights Reserved •{' '}
          <button
            type="button"
            className="text-sm hover:underline"
            onClick={onPrivacyPolicyClick}
          >
            Privacy Policy
          </button>
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2 pt-2 ">
          <span>Empowered by</span>
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 16.0943C14.7127 14.0566 17.5108 11.7713 18.9364 9.42378C20.1435 7.43596 20.2938 5.49775 19.5359 3.90325C18.8477 2.45547 17.4495 1.42171 15.8389 1.15535C14.1199 0.871043 12.3704 1.47864 10.9834 2.98335L10.5 3.50781L10.0166 2.98335C8.6296 1.47864 6.88015 0.871043 5.16108 1.15535C3.55052 1.42171 2.15231 2.45547 1.4641 3.90325C0.706157 5.49775 0.85648 7.43596 2.06363 9.42378C3.48922 11.7713 6.28734 14.0566 10.5 16.0943Z"
              fill="white"
              stroke="#BF0020"
              strokeWidth="1.55798"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0712 10.3672L8.92515 10.9561C8.80802 11.0163 8.66314 10.9723 8.60153 10.8579C8.577 10.8123 8.56853 10.7601 8.57744 10.7094L8.79643 9.46149C8.84767 9.16949 8.7486 8.87154 8.53149 8.66471L7.60382 7.78094C7.50908 7.69068 7.50717 7.54246 7.59956 7.4499C7.63633 7.41305 7.68451 7.38907 7.73664 7.38167L9.01827 7.19966C9.31848 7.15702 9.57798 6.97278 9.7122 6.70699L10.2853 5.57199C10.3439 5.45604 10.4876 5.40841 10.6062 5.46562C10.6535 5.48841 10.6918 5.52579 10.7151 5.57199L11.2883 6.70699C11.4225 6.97278 11.682 7.15702 11.9822 7.19966L13.2638 7.38167C13.3948 7.40027 13.4855 7.51906 13.4665 7.64701C13.4589 7.69794 13.4343 7.74501 13.3966 7.78094L12.469 8.66471C12.2519 8.87154 12.1528 9.16949 12.204 9.46149L12.423 10.7094C12.4454 10.8368 12.3578 10.9578 12.2273 10.9797C12.1754 10.9884 12.122 10.9801 12.0753 10.9561L10.9292 10.3672C10.6607 10.2292 10.3398 10.2292 10.0712 10.3672Z"
              fill="#0027DC"
            />
          </svg>
          <a
            href="https://goodparty.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            GoodParty.org
          </a>
        </div>
      </div>
    </footer>
  )
}
