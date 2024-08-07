"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const provider_1 = require("@/utils/provider");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "Abdullah-arain portfolio",
    description: "Generated by create next app",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>
        <provider_1.ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </provider_1.ThemeProvider>
      </body>
    </html>);
}
exports.default = RootLayout;
