import { RiInstagramFill, RiSnapchatFill, RiTiktokFill } from "@remixicon/react"

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
                <div className="flex space-x-6 mb-2">
                    <a href="https://www.instagram.com/sergiobabs77" target="_blank" rel="noopener norefferer" aria-label="Visit our instagram page">
                    <RiInstagramFill />
                    </a>

                    <a href="https://www.snapchat.com/add/sergiobabs_77" target="_blank" rel="noopener" aria-label="Visit our snapchat page">
                    <RiSnapchatFill />
                    </a>

                    <a href="https://www.tiktok.com/@sergio_babs77" target="_blank" rel="noopener" aria-label="Visit our tiktok page">
                    <RiTiktokFill />
                    </a>
                </div>
                <p className="text-sm">&copy; 2026  Sergio Babs. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer