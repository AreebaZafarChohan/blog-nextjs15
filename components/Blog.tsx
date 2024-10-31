import Image from "next/image";
import Paragraph from "./Paragraph";
import HeadingThree from "./HeadingThree";
import HeadingFour from "./HeadingFour";
import HeadingTwo from "./HeadingTwo";

const Blog = () => {
  return (
    <div className="font-sans my-16 lg:mx-16 md:mx-16 mx-2">
      <h1 className="text-black my-8 lg:mx-8 md:mx-8 mx-2  text-center md:text-4xl lg:text-4xl text-3xl font-extrabold uppercase">
        Next.js 15 Upgrade: New Features and Difficulties
      </h1>
      <div className="flex justify-center items-center mt-6 mb-10">
        <Image
          src="/images/nextjs15.png"
          alt="Next.js 15"
          width={600}
          height={600}
          className="border-y-2 border-blue-950 p-4"
        />
      </div>
      <Paragraph
        text="With every new iteration, Vercel&#39;s potent React framework, Next.js,
        keeps improving. A number of new features have been added to Next.js 15
        recently with the goal of improving performance, expediting development,
        and giving developers greater control over their apps. The important new
        features in Next.js 15 as well as various difficulties developers could
        run into when updating will be covered in this blog."
      />
      <HeadingTwo h2="Next.js 15&#39;s New Features" />
      <ol>
        <li>
          <HeadingThree h3="1.@NEXT/CODEMOD TOOL " />
          <Paragraph
            text="The new @next/codemod CLI tool makes it easier to update to the most
            recent versions of Next.js and React. By automating code changes
            required for compatibility with updated versions, this command-line
            interface greatly minimizes human labor and the possibility of
            mistakes."
          />
        </li>
        <li>
          <HeadingThree h3="2.Async Request APIs:" />
          <Paragraph
            text="In an effort to streamline the rendering and caching models, Next.js
          15 delivers revolutionary enhancements with Async Request APIs. This
          action is a step toward enhancing the performance of the application
          and the developer experience."
          />
        </li>
        <li>
          <HeadingThree h3="3.Caching Semantics:" />
          <Paragraph
            text="The default caching for client navigations, GET Route Handlers, and
            fetch requests has changed in Next.js 15. With more control over
            caching tactics, developers can now tailor performance to the
            demands of certain applications."
          />
          <HeadingFour h4="For instance:" />
          <div className="flex justify-center items-center mt-6 mb-10">
            <Image
              src="/images/code1.png"
              alt="Code Image"
              width={600}
              height={600}
              className="border-y-2 border-blue-950 p-4"
            />
          </div>
        </li>
        <li>
          <HeadingThree h3="4.Support for React 19:" />
          <Paragraph
            text="Next.js 15 enhances speed and efficiency by supporting React 19.
            Experimental features designed to improve the development workflow
            are part of this support."
          />
        </li>
        <li>
          <HeadingThree h3="5.Turbopack Dev:" />
          <Paragraph
            text=" By introducing Turbopack as a reliable development server,
            performance and stability are improved, which facilitates the
            efficient development of large-scale applications."
          />
        </li>
        <li>
          <HeadingThree h3="6.Static Indicator:" />
          <Paragraph
            text="During development, a new static indicator aids developers in
            identifying static routes, which enhances their comprehension of the
            application&#39;s rendering behavior."
          />
        </li>
        <li>
          <HeadingThree h3="7.unstable_after API:" />
          <Paragraph
            text="This API lets programmers run code after a response has finished
            streaming. Although still in the experimental stage, this feature
            has the potential to improve server-side operations management."
          />
        </li>
        <li>
          <HeadingThree h3="8.INSTRUMENTATION.JS API:" />
          <Paragraph
            text="The new instrumentation is the js API.With the introduction of
            server lifecycle observability by the js API, developers may more
            efficiently resolve issues and keep an eye on application
            performance."
          />
        </li>
        <li>
          <HeadingThree h3="9.Improved Forms:" />
          <Paragraph
            text="  HTML forms have been improved with Next.js 15, which makes
            client-side navigation easier and enhances user experience. For
            improved form handling, developers can use the new next/form
            package."
          />
        </li>
        <li>
          <HeadingThree h3="10.Next.config TypeScript Support:" />
          <Paragraph
            text="By activating TypeScript in next.config.ts, developers may take
            advantage of TypeScript&#39;s tools and type safety features for
            configuration files, boosting the development workflow overall."
          />
        </li>
        <li>
          <HeadingThree h3="11.Hosting oneself Improvements:" />
          <Paragraph
            text="Developers now have greater control over Cache-Control headers
            thanks to advancements in self-hosting capabilities, which enables
            improved application caching policy management."
          />
        </li>
        <li>
          <HeadingThree h3="12.ESLint 9 Support:" />
          <Paragraph
            text=" ESLint 9 is now supported by Next.js 15, allowing developers to take
            advantage of the latest linting features to maintain code
            consistency and quality."
          />
        </li>
        <li>
          <HeadingThree h3="13.Development and Build Performance:" />
          <Paragraph
            text="Notable enhancements have been made to both development and build
            performance, which has simplified the development workflow and led
            to faster build times and better hot module replacement (HMR)."
          />
        </li>
      </ol>
      <HeadingTwo h2="Additional Modifications to Next.js 15" />
      <HeadingThree h3="Crucial Updates for Developers" />
      <Paragraph
        text=" In Next.js 15, several new features have been introduced, while some
        existing functionalities have been removed, which developers should be
        aware of. These updates are crucial for understanding the latest
        capabilities of Next.js and adjusting development workflows accordingly.
        Let&#39;s dive into these enhancements and changes to see how they can
        influence your Next.js projects."
      />
      <ul>
        <li>
          <HeadingThree h3="• Removed squoosh for sharp:" />
          <Paragraph
            text=" As an optional dependence for image processing, sharp has been added
            to the next/image component in place of squoosh."
          />
        </li>
        <li>
          <HeadingThree h3="• Default Content-Disposition Change:" />
          <Paragraph
            text=" The way images are handled has changed, with attachment now being
            the default mode for providing images."
          />
        </li>
        <li>
          <HeadingThree h3="• Middleware Updates::" />
          <Paragraph
            text="To encourage best practices, React server conditions now restrict
            the use of unrecommended React API imports."
          />
        </li>
        <li>
          <HeadingThree h3="• Minimum Version of Node.js:" />
          <Paragraph
            text=" The bare minimum needed The latest version of Node.js, 18.18.0,
            requires environment updates in order to be compatible."
          />
        </li>
        <li>
          <HeadingThree h3="• Suspense Prop Removal:" />
          <Paragraph
            text="To make using dynamic components in the App Router easier, the
            suspense prop for next/dynamic has been deprecated."
          />
        </li>
        <li>
          <HeadingThree h3="• Experimental React Compiler:" />
          <Paragraph
            text=" The next/font package now manages font families internally instead
            of supporting other packages."
          />
        </li>
        <li>
          <HeadingThree h3="• Stable Configuration Options:" />
          <Paragraph
            text=" Reliability has been improved by the stability of the
            bundlePagesExternals and serverComponentsExternalPackages
            configuration options."
          />
        </li>
        <li>
          <HeadingThree h3="• Improvements to the Error Overlay:" />
          <Paragraph
            text=" To facilitate debugging, the error overlay now has a button to copy
            the Node.js Inspector URL if enabled."
          />
        </li>
        <li>
          <HeadingThree h3="• Dynamic Fetch Caching:" />
          <Paragraph
            text="A no-store caching policy will be automatically implemented for
            fetch requests when force-dynamic is used, guaranteeing that new
            data is retrieved."
          />
        </li>
        <li>
          <HeadingThree h3="• Dynamic Component Prefetching:" />
          <Paragraph
            text="This improves loading efficiency by automatically prefetching the
            chunk of a next or dynamic component used during SSR."
          />
        </li>
      </ul>
      <HeadingTwo h2="Difficulties with the Next.js 15 Migration" />
      <Paragraph
        text=" Transitioning from Next.js 14 to Next.js 15 presents developers with
        some challenges, as expected with any major update. Common issues
        include dependency conflicts, caching behavior changes, and deployment
        issues, particularly with API routes on platforms like Vercel. These can
        impact application stability and performance if not handled correctly.
        In this blog, we will examine the most frequent migration problems and
        practical solutions to help make the upgrade to Next.js 15 as seamless
        as possible"
      />
      <ol>
        <li>
          <HeadingThree h3="1.Dependency Issues with React 19 RC:" />
          <Paragraph
            text="React 19 RC&#39;s release in Next.js 15 has resulted in dependency
            issues. Unmet peer dependency errors pertaining to react and
            react-dom versions are frequently encountered by developers."
          />
          <HeadingFour h4="Solution:" />
          <Paragraph
            text=" It is preferable to update all project dependencies in advance
            rather than imposing upgrades."
          />
        </li>
        <li>
          <HeadingThree h3="2.Experimental React Compiler:" />
          <Paragraph
            text="Although it automates memoization, the experimental React Compiler
            may cause instability in larger projects."
          />
          <HeadingFour h4="Solution:" />
          <Paragraph
            text="Next.config.js allows developers to enable or disable it, however
            it&#39;s best to hold off on implementing it in crucial applications
            until a stable version is available."
          />
        </li>
        <li>
          <HeadingThree h3="3.Modifications in Caching Semantics:" />
          <Paragraph
            text=" Developers may find their data-fetching tactics more challenging as
            a result of the changes in caching behavior."
          />
          <HeadingFour h4="For instance:" />
          <div className="flex justify-center items-center mt-6 mb-10">
            <Image
              src="/images/code2.png"
              alt="Code Image"
              width={600}
              height={600}
              className="border-y-2 border-blue-950 p-4"
            />
          </div>
          <HeadingFour h4="Solution:" />
          <Paragraph
            text=" Make use of suitable caching techniques, including
            getServerSideProps for dynamic data and getStaticProps for static
            material."
          />
        </li>
        <li>
          <HeadingThree h3="4.Vercel Deployment Troubles:" />
          <Paragraph
            text="Next.js 15 apps frequently have problems when delivering on
            platforms such as Vercel, particularly with relation to API routes,
            which may function properly during development but malfunction after
            deployment."
          />
          <HeadingFour h4="Solution:" />
          <Paragraph
            text=" To lessen these issues, developers should examine server logs, make
            sure environment variables are configured appropriately, and think
            about implementing API routes as serverless functions."
          />
        </li>
      </ol>

      <HeadingTwo h2="In conclusion" />
      <Paragraph
        text=" A variety of cutting-edge technologies are included in Next.js 15 to
        improve application performance and development workflows. Developers
        should be on the lookout for potential difficulties, though, especially
        when it comes to deployment problems and dependency conflicts.
        Developers can produce more reliable and productive applications by
        comprehending these difficulties and skillfully utilizing the new
        features. Along with the new capabilities, developers may learn a lot
        about how to optimize their Next.js applications from the significant
        updates discussed in this blog, such as the switch from squoosh to
        sharp, modifications to cache semantics, and the deprecation of some
        props. As you make the switch to Next.js 15, it&#39;s critical to stay up to
        date on these upgrades and recommended practices!"
      />
    </div>
  );
};

export default Blog;
