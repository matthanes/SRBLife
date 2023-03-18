import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
} from 'react-share';

const SocialShare = ({title, base_url, router, size, }) => {
  return (
    <div className="flex items-center">
      {/* <span className='mr-3 font-bold'>Share:</span> */}
      <FacebookShareButton url={`${base_url}${router.asPath}`}>
        <FacebookIcon size={size} round={true}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton
        title={title}
        url={`${base_url}${router.asPath}`}
        hashtags={['SRBLife']}
      >
        <TwitterIcon size={size} round={true}></TwitterIcon>
      </TwitterShareButton>
      <RedditShareButton url={`${base_url}${router.asPath}`} title={title}>
        <RedditIcon size={size} round={true}></RedditIcon>
      </RedditShareButton>
      <EmailShareButton
        subject={`SRBLife: ${title}`}
        body="I thought you might like this article I found:"
        url={`${base_url}${router.asPath}`}
      >
        <EmailIcon size={size} round={true}></EmailIcon>
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
